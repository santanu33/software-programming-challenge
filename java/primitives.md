## Java primitives

```
byte   8 bits Signed integer range from -128 to 127

short  16 bits signed integer range from -32,768 and a maximum value of 32,767
	
int    32-bit signed integer range from -2^31 to 2^31 - 1
	
long    64-bit signed integer range from -2^63 and a maximum value of 2^63-1 , literal "l" or "L"   
	
float   32-bit IEEE 754 floating point range from -3.4E+38 to +3.4E+38 , literal "f" or "F" 

double  64-bit IEEE-754 floating point range from -1.7E+308 to +1.7E+308 , literal "d" or "D" 

boolean true or false

char    16-bit Unicode character
```

## gotchas

```
byte b = 129 ;          // compile error: Error incompatible types: possible lossy conversion from int to byte

byte b1 = (byte) 129;   // value is -127, why? the positive range goes up to 127, then goes negative 2 units

long l = 12;            // auto typing from int to long.

long l1 = 2147483648;   // compile error: integer number too large, can't make it to long

long l2 = 2147483648L;  // have to add l or L literal

double d2 = 2/3 * 5;    // wrong answer - 2/3 == 0, 0*5 = 0
```


