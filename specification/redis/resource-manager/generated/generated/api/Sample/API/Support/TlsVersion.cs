namespace Sample.API.Support
{

    public partial struct TlsVersion : System.IEquatable<TlsVersion>
    {
        public static Sample.API.Support.TlsVersion One0 = @"1.0";
        public static Sample.API.Support.TlsVersion One1 = @"1.1";
        public static Sample.API.Support.TlsVersion One2 = @"1.2";
        /// <summary>the value for an instance of the <see cref="TlsVersion" /> Enum.</summary>
        private string _value {get;set;}
        /// <summary>Compares values of enum type TlsVersion</summary>
        /// <param name="e">the value to compare against this instance.</param>
        /// <returns><c>true</c> if the two instances are equal to the same value</returns>
        public bool Equals(Sample.API.Support.TlsVersion e)
        {
            return _value.Equals(e._value);
        }
        /// <summary>Compares values of enum type TlsVersion (override for Object)</summary>
        /// <param name="obj">the value to compare against this instance.</param>
        /// <returns><c>true</c> if the two instances are equal to the same value</returns>
        public override bool Equals(object obj)
        {
            return obj is TlsVersion && Equals((TlsVersion)obj);
        }
        /// <summary>Returns hashCode for enum TlsVersion</summary>
        /// <returns>The hashCode of the value</returns>
        public override int GetHashCode()
        {
            return this._value.GetHashCode();
        }
        /// <summary>Creates an instance of the <see cref="TlsVersion" Enum class./></summary>
        /// <param name="underlyingValue">the value to create an instance for.</param>
        private TlsVersion(string underlyingValue)
        {
            this._value = underlyingValue;
        }
        /// <summary>Returns string representation for TlsVersion</summary>
        /// <returns>A string for this value.</returns>
        public override string ToString()
        {
            return this._value;
        }
        /// <summary>Implicit operator to convert string to TlsVersion</summary>
        /// <param name="value">the value to convert to an instance of <see cref="TlsVersion" />.</param>
        public static implicit operator TlsVersion(string value)
        {
            return new TlsVersion(value);
        }
        /// <summary>Implicit operator to convert TlsVersion to string</summary>
        /// <param name="e">the value to convert to an instance of <see cref="TlsVersion" />.</param>
        public static implicit operator string(Sample.API.Support.TlsVersion e)
        {
            return e._value;
        }
        /// <summary>Overriding != operator for enum TlsVersion</summary>
        /// <param name="e1">the value to compare against <see cref="e2" /></param>
        /// <param name="e2">the value to compare against <see cref="e1" /></param>
        /// <returns><c>true</c> if the two instances are not equal to the same value</returns>
        public static bool operator !=(Sample.API.Support.TlsVersion e1, Sample.API.Support.TlsVersion e2)
        {
            return !e2.Equals(e1);
        }
        /// <summary>Overriding == operator for enum TlsVersion</summary>
        /// <param name="e1">the value to compare against <see cref="e2" /></param>
        /// <param name="e2">the value to compare against <see cref="e1" /></param>
        /// <returns><c>true</c> if the two instances are equal to the same value</returns>
        public static bool operator ==(Sample.API.Support.TlsVersion e1, Sample.API.Support.TlsVersion e2)
        {
            return e2.Equals(e1);
        }
    }
}