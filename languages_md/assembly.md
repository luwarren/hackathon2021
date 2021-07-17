# Assembly

Assembly is any low-level programming language that is intended to communicate directly with a computer's hardware. Processors in machines only understand machine language instructions, which are known as Binary. However, this language is too obscure and complex for use in software development. As such, Assembly represents the various machine language instructions in symbolic code and adds a more understandable format. It is specific to a particular computer architecture in contrast to high-level programming languages, which are generally portable across multiple systems.

## What is Assembly used for?

Assembly decreases the execution time and memory load on any processor, and having an understanding of the language tends to increase the understanding of how programs interface with the operating system, processor and BIOS. In addition, Assembly improves one's awareness of how data is represented and is the most suitable for time-critical jobs. 

## Hello, World! [ hello_world.asm ]\* 

	global _start

	section .data
	   msg: db "Hello, World!",0xa
	   len: equ $-msg

	section .text

	_start:
	   mov eax, 4
	   mov ebx, 1
	   mov ecx, msg
	   mov edx, len
	   int 0x80
	   mov al, 1
	   mov ebx, 0
	   int 0x80

\* Note:  
As assembly differs for each processor, this code will work for the x86 microprocessor only.
