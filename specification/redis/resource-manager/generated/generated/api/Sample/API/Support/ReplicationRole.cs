namespace Sample.API.Support
{

    public partial struct ReplicationRole : System.IEquatable<ReplicationRole>
    {
        public static Sample.API.Support.ReplicationRole Primary = @"Primary";
        public static Sample.API.Support.ReplicationRole Secondary = @"Secondary";
        /// <summary>the value for an instance of the <see cref="ReplicationRole" /> Enum.</summary>
        private string _value {get;set;}
        /// <summary>Compares values of enum type ReplicationRole</summary>
        /// <param name="e">the value to compare against this instance.</param>
        /// <returns><c>true</c> if the two instances are equal to the same value</returns>
        public bool Equals(Sample.API.Support.ReplicationRole e)
        {
            return _value.Equals(e._value);
        }
        /// <summary>Compares values of enum type ReplicationRole (override for Object)</summary>
        /// <param name="obj">the value to compare against this instance.</param>
        /// <returns><c>true</c> if the two instances are equal to the same value</returns>
        public override bool Equals(object obj)
        {
            return obj is ReplicationRole && Equals((ReplicationRole)obj);
        }
        /// <summary>Returns hashCode for enum ReplicationRole</summary>
        /// <returns>The hashCode of the value</returns>
        public override int GetHashCode()
        {
            return this._value.GetHashCode();
        }
        /// <summary>Creates an instance of the <see cref="ReplicationRole" Enum class./></summary>
        /// <param name="underlyingValue">the value to create an instance for.</param>
        private ReplicationRole(string underlyingValue)
        {
            this._value = underlyingValue;
        }
        /// <summary>Returns string representation for ReplicationRole</summary>
        /// <returns>A string for this value.</returns>
        public override string ToString()
        {
            return this._value;
        }
        /// <summary>Implicit operator to convert string to ReplicationRole</summary>
        /// <param name="value">the value to convert to an instance of <see cref="ReplicationRole" />.</param>
        public static implicit operator ReplicationRole(string value)
        {
            return new ReplicationRole(value);
        }
        /// <summary>Implicit operator to convert ReplicationRole to string</summary>
        /// <param name="e">the value to convert to an instance of <see cref="ReplicationRole" />.</param>
        public static implicit operator string(Sample.API.Support.ReplicationRole e)
        {
            return e._value;
        }
        /// <summary>Overriding != operator for enum ReplicationRole</summary>
        /// <param name="e1">the value to compare against <see cref="e2" /></param>
        /// <param name="e2">the value to compare against <see cref="e1" /></param>
        /// <returns><c>true</c> if the two instances are not equal to the same value</returns>
        public static bool operator !=(Sample.API.Support.ReplicationRole e1, Sample.API.Support.ReplicationRole e2)
        {
            return !e2.Equals(e1);
        }
        /// <summary>Overriding == operator for enum ReplicationRole</summary>
        /// <param name="e1">the value to compare against <see cref="e2" /></param>
        /// <param name="e2">the value to compare against <see cref="e1" /></param>
        /// <returns><c>true</c> if the two instances are equal to the same value</returns>
        public static bool operator ==(Sample.API.Support.ReplicationRole e1, Sample.API.Support.ReplicationRole e2)
        {
            return e2.Equals(e1);
        }
    }
}