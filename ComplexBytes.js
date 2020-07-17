
/**
 * Created by @calebebrim
 * 
 * Decimal Reference for byte ammount
 * 1	      B	  byte
 * 1000**1	kB	kilobyte
 * 1000**2	MB	megabyte
 * 1000**3	GB	gigabyte
 * 1000**4	TB	terabyte
 * 1000**5	PB	petabyte
 * 1000**6	EB	exabyte
 * 1000**7	ZB	zettabyte
 * 1000**8	YB	yottabyte
 * 
 * Binary reference for byte ammount
 * 1	      B	  byte	    
 * 1024**1	KiB	kibibyte	
 * 1024**2	MiB	mebibyte	
 * 1024**3	GiB	gibibyte	
 * 1024**4	TiB	tebibyte	–
 * 1024**5	PiB	pebibyte	–
 * 1024**6	EiB	exbibyte	–
 * 1024**7	ZiB	zebibyte	–
 * 1024**8	YiB	yobibyte
 */
 
export class ComplexBytes {
  /** @param {Number} bytes*/
  constructor(bytes) {
    this.bytes = bytes
  }

  /**
   * @param {Number} value
   */
  set bytes(value) {
    value = Number(value)
    if (value % 1 != 0) throw new Error("bytes does not accept decimal values")
    this.total_bytes = value
  }

  /** @returns {Number}*/ get bytes() { return this.total_bytes }
  /** @returns {Number}*/ get B() { return this.total_bytes }
  /** @returns {Number}*/ get KiB() { return this.total_bytes / 1024 ** 1 }
  /** @returns {Number}*/ get MiB() { return this.total_bytes / 1024 ** 2 }
  /** @returns {Number}*/ get GiB() { return this.total_bytes / 1024 ** 3 }
  /** @returns {Number}*/ get TiB() { return this.total_bytes / 1024 ** 4 }
  /** @returns {Number}*/ get PiB() { return this.total_bytes / 1024 ** 5 }
  /** @returns {Number}*/ get EiB() { return this.total_bytes / 1024 ** 6 }
  /** @returns {Number}*/ get ZiB() { return this.total_bytes / 1024 ** 7 }
  /** @returns {Number}*/ get YiB() { return this.total_bytes / 1024 ** 8 }


  /** @returns {Number}*/ get kB() { return this.total_bytes / 1000 ** 1 }
  /** @returns {Number}*/ get MB() { return this.total_bytes / 1000 ** 2 }
  /** @returns {Number}*/ get GB() { return this.total_bytes / 1000 ** 3 }
  /** @returns {Number}*/ get TB() { return this.total_bytes / 1000 ** 4 }
  /** @returns {Number}*/ get PB() { return this.total_bytes / 1000 ** 5 }
  /** @returns {Number}*/ get EB() { return this.total_bytes / 1000 ** 6 }
  /** @returns {Number}*/ get ZB() { return this.total_bytes / 1000 ** 7 }
  /** @returns {Number}*/ get YB() { return this.total_bytes / 1000 ** 8 }

  static KiB(ammount) { return new ComplexBytes(ammount * 1024 ** 1) }
  static MiB(ammount) { return new ComplexBytes(ammount * 1024 ** 2) }
  static GiB(ammount) { return new ComplexBytes(ammount * 1024 ** 3) }
  static TiB(ammount) { return new ComplexBytes(ammount * 1024 ** 4) }
  static PiB(ammount) { return new ComplexBytes(ammount * 1024 ** 5) }
  static EiB(ammount) { return new ComplexBytes(ammount * 1024 ** 6) }
  static YiB(ammount) { return new ComplexBytes(ammount * 1024 ** 8) }

  static KB(ammount) { return new ComplexBytes(ammount * 1000 ** 1) }
  static MB(ammount) { return new ComplexBytes(ammount * 1000 ** 2) }
  static GB(ammount) { return new ComplexBytes(ammount * 1000 ** 3) }
  static TB(ammount) { return new ComplexBytes(ammount * 1000 ** 4) }
  static PB(ammount) { return new ComplexBytes(ammount * 1000 ** 5) }
  static EB(ammount) { return new ComplexBytes(ammount * 1000 ** 6) }
  static YB(ammount) { return new ComplexBytes(ammount * 1000 ** 8) }

}
