namespace Sample.API.Support
{

    public partial struct RebootType : System.IEquatable<RebootType>
    {
        public static Sample.API.Support.RebootType AllNodes = @"AllNodes";
        public static Sample.API.Support.RebootType PrimaryNode = @"PrimaryNode";
        public static Sample.API.Support.RebootType SecondaryNode = @"SecondaryNode";
        /// <summary>the value for an instance of the <see cref="RebootType" /> Enum.</summary>
        private string _value {get;set;}
        /// <summary>Compares values of enum type RebootType</summary>
        /// <param name="e">the value to compare against this instance.</param>
        /// <returns><c>true</c> if the two instances are equal to the same value</returns>
        public bool Equals(Sample.API.Support.RebootType e)
        {
            return _value.Equals(e._value);
        }
        /// <summary>Compares values of enum type RebootType (override for Object)</summary>
        /// <param name="obj">the value to compare against this instance.</param>
        /// <returns><c>true</c> if the two instances are equal to the same value</returns>
        public override bool Equals(object obj)
        {
            return obj is RebootType && Equals((RebootType)obj);
        }
        /// <summary>Returns hashCode for enum RebootType</summary>
        /// <returns>The hashCode of the value</returns>
        public override int GetHashCode()
        {
            return this._value.GetHashCode();
        }
        /// <summary>Creates an instance of the <see cref="RebootType" Enum class./></summary>
        /// <param name="underlyingValue">the value to create an instance for.</param>
        private RebootType(string underlyingValue)
        {
            this._value = underlyingValue;
        }
        /// <summary>Returns string representation for RebootType</summary>
        /// <returns>A string for this value.</returns>
        public override string ToString()
        {
            return this._value;
        }
        /// <summary>Implicit operator to convert string to RebootType</summary>
        /// <param name="value">the value to convert to an instance of <see cref="RebootType" />.</param>
        public static implicit operator RebootType(string value)
        {
            return new RebootType(value);
        }
        /// <summary>Implicit operator to convert RebootType to string</summary>
        /// <param name="e">the value to convert to an instance of <see cref="RebootType" />.</param>
        public static implicit operator string(Sample.API.Support.RebootType e)
        {
            return e._value;
        }
        /// <summary>Overriding != operator for enum RebootType</summary>
        /// <param name="e1">the value to compare against <see cref="e2" /></param>
        /// <param name="e2">the value to compare against <see cref="e1" /></param>
        /// <returns><c>true</c> if the two instances are not equal to the same value</returns>
        public static bool operator !=(Sample.API.Support.RebootType e1, Sample.API.Support.RebootType e2)
        {
            return !e2.Equals(e1);
        }
        /// <summary>Overriding == operator for enum RebootType</summary>
        /// <param name="e1">the value to compare against <see cref="e2" /></param>
        /// <param name="e2">the value to compare against <see cref="e1" /></param>
        /// <returns><c>true</c> if the two instances are equal to the same value</returns>
        public static bool operator ==(Sample.API.Support.RebootType e1, Sample.API.Support.RebootType e2)
        {
            return e2.Equals(e1);
        }
    }
}