namespace IPv4Validator
{
    public class IPv4Address
    {
        public string RawInput {get;}
        public byte[] Octets { get; private set;}
        public bool IsValid{ get; private set;}

        public IPv4Address(string input)
        {
            RawInput = input;
            Validate();
        }

        private void Validate()
        {
            string[] parts = RawInput.Split('.');

            if(parts.Length != 4)
            {
                IsValid = false;
                return;
            }

            byte[] tempOctets = new byte[4];
            for(int i = 0; i < 4; i++)
            {
                if(!byte.TryParse(parts[i], out byte value) ||
                (parts[i].Length > 1 && parts[i].StartsWith("0")))
                {
                    IsValid = false;
                    return;
                }
                tempOctets[i] = value;
            }
            Octets = tempOctets;
            IsValid = true;
        }

        public string GetClassification()
        {
            if (!IsValid) return "Invalid";
            byte firstOctet = Octets[0];
            if (firstOctet >= 1 && firstOctet <= 126) return "Class A";
            else if (firstOctet >= 128 && firstOctet <= 191) return "Class B";
            else if (firstOctet >= 192 && firstOctet <= 223) return "Class C";
            else if (firstOctet >= 224 && firstOctet <= 239) return "Class D";
            else if (firstOctet >= 240 && firstOctet <= 255) return "Class E";
            return "Unknown";
        }
    }   
}