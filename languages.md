# Ruby

Ruby is a dynamic, open source programming language. Primarily focusing on simplicity and productivity, it has an easy-to-understand syntax that is easy to read and write. It is an object-oriented language, that is considered as close as you can get to coding in English. It is an easy introduction to the world of programming, and is a strong language to add to a resume or portfolio.

## What is Ruby used for?

Ruby is primarily used for building web applications with its popular web framework *Ruby on Rails*. However, it is a general-purpose language and has many other applications such as data-analysis, prototyping and proof of concepts. There are a number of highly popular applications created by Ruby, including AirBnB, Hulu and Github. Not bad for such a simple programming language!

## Hello, World! [ hello_world.rb ]

        puts "Hello, World!"


# JavaScript

JavaScript is a scripting language that allow you to implement complex features on web pages. It is a text-based language that is used both client-side and server-side that to add behaviour to web pages. While other languages (HTML and CSS) are used to give structure and style to a web page, JavaScript is responsible for engaging the user with its interactive elements. Incorporating JavaScript improves the user experience by converting a web page from static to interactive. 

## What is JavaScript used for?

JavaScript is mainly used for web-based applications and browsers. However, it is used beyond just the web, taking roles in servers and embedded hardware controls. Frameworks for JavaScript such as *React*, *React Native*, *Angular* and *Vue* can be used to develop mobile apps. There are a number of highly popular applications that use the JavaScript framework *Node.js*, including PayPal, LinkedIn, Netflix and Uber!

## Hello, World! [ hello_world.js ]

        <!DOCTYPE html>
        <html lang="en">
        <head>
        	<meta charset="UTF-8">
        	<title>JavaScript Hello, World!</title>
        	<script>
        	    alert('Hello, World!');
        	</script>
        </head>
        <body>
        </body>
        </html>

# Java

Java is an all-around universal programming language. It is a an object-oriented programming language that has a variety of applications, and is constantly evolving, almost uniquely combining innovation with stability. Java can be used to create complete applications that can run on a single computer or be distributed across servers and clients in a network. The language has an English-like syntax with minimum special characters, and could be learned in a short time span and used to build suitable applications.

## What is Java used for?

Java derives its popularity from its independence, only requiring a Java Runtime Environment to be installed, regardless of operating system. Common uses of Java include Desktop GUI applications, Android apps, science and research and financial and retail services. Java can deal with huge datasets and big data technologies, being used for MATLAB.

## Hello, World! [ hello_world.java ]

	class HelloWorld {
		public static void main(String[] args) {

			System.out.println("Hello, World!"); 
		}
	}

# C

C is a powerful general-purpose programming language. It can be used to develop software such as operating systems, databases and compilers. C is an excellent language to learn for beginners as it builds the foundational understanding and knowledge of coding that is essential in higher-level languages. It is a structured language that produces efficient programs and can be compiled on a variety of operating systems. 

## What is C used for?

C was designed for a wide variety of computer platforms and operating systems with few changes to its source code. It was initially used for system development work, particularly the programs that make-up the operating system. C was adopted as a system development language because it produces code that runs nearly as fast as the code written in assembly language. Some examples of the use of C are language compilers, text editors, network drivers and language interpreters.

## Hello, World! [ hello_world.c ]

	#include <stdio.h>

	int main () {
		printf("Hello, World!");
		return 0;
	}


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


# Perl

Perl is not a programming language by itself, but rather a group of programming languages which are interpreted and dynamic. The family includes Perl 5 and Perl 6 and development of both languages take place independent of each other. It combines the features of languages like C and shellscript, and is extremely versatile. Perl has seen a decline of users as Python has gained popularity, as the flexibility of Perl can be confusing for newer programmers, while remaining relevant for power users.

## What is Perl used for?

Perl is more powerful language than similar ones, and is also fast. As it was designed for text processing, with in-built text processing capability, Perl is widely used in server-side programming. Web developers use Perl for both text processing and manipulation. Perl has had roles in leading research in areas such as genomics and remains an integral part of database integration, such as *MySQL* and *ORACLE*.

## Hello, World! [ hello_world.pl ]

	#!/usr/bin/perl
	use strict;
	use warnings;

	print("Hello World\n");


# C#
C# is an open-source, flexible and versatile programming language. It is a modern, general-purpose programming language that can be used to perform a wide range of tasks and objectives that span over a variety of professions. C# was designed to keep business and enterprise needs in mind - building different types of software with a single, cross-platform programming language. It supports web, mobile and app development needs, with its syntax being influenced by Java, C++ and Pascal.  

## What is C# used for?
C# is primarily used on the Windows .NET framework, although it can be applied to an open source platform. This highly versatile programming language is an object-oriented programming language. C# is a great choice for developers with moderate to advanced experience with writing code. While experts acknowledge the language for being one of moderate complexities, they agree that it’s fairly simple to grasp and excel in. C# can be used to create a number of different programs and applications: mobile apps, desktop apps, cloud-based services, websites, enterprise software and games. Lots and lots of games. While C# is remarkably versatile, there are three areas in which it is most commonly used, website development, Windows applications and games.

## Hello, World! [ hello_world.cs ]

	namespace HelloWorld
	{
		class Hello {         
			static void Main(string[] args)
			{
				System.Console.WriteLine("Hello, World!");
			}
		}
	}


# C++

C++ is a cross-platform language that can be used to create high-performance applications, and was initially developed as an extension to the C language. It gives programmers a high level control over system resources and memory. C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development cost and is cross-platform across a multitude of operating systems.

## What is C++ used for?

C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems. It is commonly used for graphics-heavy software such as games, photo and video editing apps, browsers. C++ is one of the fastest and most predictable languages out there, and boasts a large ecosystem that can be drawn upon by the open-source libraries that developers create. If developing high-performance applications such as browsers or game engines interests you, C++ will be the best choice for you. 

## Hello, World! [ hello_world.cpp ]

	#include <iostream>

	int main() {
		std::cout << "Hello, World!";
		return 0;
	}


# HTML / CSS

HyperText Markup Language (HTML) gives content structure and meaning by defining the content in certain categories. Cascading Style Sheets (CSS) is a presentation language to style the appearance of the content. While extremely interlinked, these two languages are independent of each other - CSS should not be written inside of a HTML document and vice versa. HTML will always represent content, and CSS will always represent the appearance of said content. These are two of the most dominant computer languages available.

## What is HTML / CSS used for?

If you’re thinking of building a website, then you’ll almost certainly have come across the acronyms HTML and CSS. These two essential tools form some of the foundations of any webpage. HTML is supported by every single browser and is established on pretty much every webpage in existence. You don’t need any licenses, you don’t need to pay for it, and it can be pretty easy to learn and code. If we can compare a webpage to the human body, then HTML is the bones of the body.  

If HTML is the bones of the body, then CSS is the skin that covers it. It’s used for background colour, styling, layout, borders, shadowing – all the essential design bits and bobs that make a webpage look slick and smart. CSS enables you to distinguish between presentation and content by modifying the design and display of HTML elements.

## Hello, World! [ hello_world.html ]

	<!DOCTYPE html>
		<html>
			<head>
			<title>HTML Hello, World!</title>
		</head>
		<body>
			<p>Hello, World!</p>
		</body>
	</html>


# Python

Python is a popular general-purpose programming language that can be used for a wide variety of applications. It is an object-oriented language that includes high-level data structures, dynamic typing, dynamic binding, and many more features that make it as useful for complex application development as it is for scripting or "glue code" that connects components together. It can also be extended to make system calls to almost all operating systems and to run code written in C or C++. Due to its ubiquity and ability to run on nearly every system architecture, Python is a universal language found in a variety of different applications.

## What is Python used for?

For those who are new to coding and programming, Python can be an excellent first step. Python is one of the simplest programming languages in the best way possible. It’s relatively easy to learn, making it a great way to start building your programming knowledge. As it is an high-level language, it is relatively easy to read and understand, as its syntax is more like English. Its straightforward layout means that you can work out what each line of code is doing. As it’s an open-source language, anyone can use Python to code. What’s more, there is a community that supports and develops the ecosystem, adding their own contributions and libraries. 

## Hello, World! [ hello_world.py ]

	print("Hello, World!")


# PHP

PHP is a widely used, open-source scripting language geared towards web development. Primarily an object-oriented language, it is used to develop websites or web applications, and can only be interpreted on a server that has PHP installed. Accessing PHP scripts from a client computer requires only a web browser. In addition, it can be embedded into HTML, making it an extremely versatile language.

## What is PHP used for?

PHP is used on popular sites such as Facebook, Wordpress and Wikipedia. It has a short learning curve and is supported by almost all hosting servers - a downside is that a hosting server is needed to run a PHP script. It can perform system functions (eg. reading, writing and closing files), forms (eg. gather data from files, save data to a file) and encrypt data. It is an extremely practical coding language, with a focus on five core tenets - simplicity, efficiency, security, flexibility and familiarity.  

## Hello, World! [ hello_world.php ]

	<html>
		<head>
			<title>PHP Hello, World!</title>
		</head>
		<body>
			<?php echo '<p>Hello, World!</p>'; ?> 
		</body>
	</html>


# Obj-C

Objective-C is the primary programming language you use when writing software for OS X and iOS. It is a general-purpose, object-oriented programming language that adds Smalltalk-style messaging to the C programming language. Objective-C inherits the syntax, primitive types, and flow control statements of C and adds syntax for defining classes and methods. It also adds language-level support for object graph management and object literals while providing dynamic typing and binding, deferring many responsibilities until runtime.

## What is Obj-C used for?

Objective-C is one of the main programming languages used by Apple for the iOS system and can be used to create mobile applications for this specific platform. 

## Hello, World! [ hello_world.m ]

	#import <Foundation/Foundation.h>

	int main(int argc, char * argv[]) {
    	NSLog(@"Hello, World!");
	}


# Swift

Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. Swift was developed as a replacement for Apple's earlier programming language Objective-C, as Objective-C had been largely unchanged since the early 1980s and lacked modern language features. Swift works with Apple's *Cocoa* and *Cocoa Touch* frameworks, and a key aspect of Swift's design was the ability to interoperate with the huge body of existing Objective-C code developed for Apple products over the previous decades.

## What is Swift used for?

Swift code almost mirrors natural English, in addition to other contemporary programming languages. This readability makes it simpler for existing programmers from JavaScript, Java, Python, C#, and C++ to embrace Swift into their toolchain, especially when transitioning to the Apple OS. Learning Swift is a great introduction to modern programming concepts and best practices. Swift makes it easy to write software that is incredibly fast and safe by design. 

## Hello, World! [ hello_world.swift ]

	print("Hello, World!") 
