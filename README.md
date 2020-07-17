# ComplexBytes
This is an util class to convert bytes to other scales.

Looking over the internet, you will find 2 patters: Decimal and Bynary format. This class consider two cases with utilitary methods.  

  
 
## Decimal Reference for byte ammount
``` 
  1       B   byte
  1000**1 kB  kilobyte
  1000**2 MB  megabyte
  1000**3 GB  gigabyte
  1000**4 TB  terabyte
  1000**5 PB  petabyte
  1000**6 EB  exabyte
  1000**7 ZB  zettabyte
  1000**8 YB  yottabyte
```  

##  Binary reference for byte ammount
```
  1       B   byte	    
  1024**1 KiB kibibyte	
  1024**2 MiB mebibyte	
  1024**3 GiB gibibyte	
  1024**4 TiB tebibyte	
  1024**5 PiB pebibyte	
  1024**6 EiB exbibyte	
  1024**7 ZiB zebibyte	
  1024**8 YiB yobibyte
 ```
 
 ## Javascript Usage
 
 ```
 import { ComplexBytes } from 'ComplexBytes'
 
 
 // Instance Usage: bytes to other scale
 var b = new ComplexBytes(1024)
 console.log(b.kB) // => 1.024
 console.log(b.KiB) // => 1
 
 // Static Usage: Scale to bytes
 console.log(ComplexBytes.YB(1).bytes) // => 1e+24
 console.log(ComplexBytes.GB(1).bytes) // => 1000000000

 ```
# Install