"use client"

import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import "./globals.css"

const Accordion = ({ title, overview, details, difficulty, duration, keyConcepts, challenges, tips, projectType }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#1b1b1b',
        marginTop: '1rem',
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: open ? '0 0 15px rgba(78,161,255,0.3)' : 'none',
        border: '1px solid #333'
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          textAlign: 'left',
          backgroundColor: '#222',
          color: '#f0f0f0',
          padding: '1.2rem',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'background-color 0.2s'
        }}
        aria-expanded={open}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#2a2a2a'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#222'}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 'bold' }}>{title}</span>
          <span style={{ 
            fontSize: '0.8rem', 
            padding: '0.2rem 0.6rem', 
            borderRadius: '12px',
            backgroundColor: 
              difficulty === 'Easy' ? '#2e7d32' :
              difficulty === 'Medium' ? '#f57c00' :
              difficulty === 'Hard' ? '#c62828' :
              difficulty === 'Very Hard' ? '#6a1b9a' : '#1976d2'
          }}>
            {difficulty}
          </span>
          <span style={{ 
            fontSize: '0.8rem', 
            padding: '0.2rem 0.6rem', 
            borderRadius: '12px',
            backgroundColor: 
              projectType === 'solo' ? '#1565c0' : 
              projectType === 'duo' ? '#c2185b' : '#7b1fa2'
          }}>
            {projectType === 'solo' ? '👤 Solo' : projectType === 'duo' ? '👥 Duo' : '👨‍👩‍👧‍👦 Team'}
          </span>
          <span style={{ fontSize: '0.8rem', color: '#aaa' }}>⏱️ {duration}</span>
        </div>
        <span style={{ 
          transform: open ? 'rotate(90deg)' : 'rotate(0)', 
          transition: 'transform 0.2s',
          fontSize: '0.8rem'
        }}>▶</span>
      </button>
      <div
        style={{
          maxHeight: open ? '2000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
          backgroundColor: '#2a2a2a'
        }}
      >
        <div style={{ padding: open ? '1.5rem' : '0 1.5rem' }}>
          <p style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', lineHeight: '1.6' }}>{overview}</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <h4 style={{ color: '#4ea1ff', marginBottom: '0.5rem' }}>📚 Key Concepts</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#ccc' }}>
                {keyConcepts.map((concept, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', lineHeight: '1.4' }}>{concept}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: '#4ea1ff', marginBottom: '0.5rem' }}>🎯 Learning Objectives</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#ccc' }}>
                {details.map((d, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', lineHeight: '1.4' }}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: '#ff6b6b', marginBottom: '0.5rem' }}>⚠️ Common Challenges</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#ccc' }}>
                {challenges.map((challenge, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', lineHeight: '1.4' }}>{challenge}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: '#4cd964', marginBottom: '0.5rem' }}>💡 Pro Tips</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#ccc' }}>
                {tips.map((tip, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', lineHeight: '1.4' }}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedMilestone, setSelectedMilestone] = useState('all');

  const projects = [
    // ... (your existing projects array remains exactly the same)
    {
      name: 'libft',
      milestone: 'Milestone 0',
      overview: 'Build your own C standard library functions. This foundational project teaches memory management, string manipulation, and deep understanding of how libc works internally. You\'ll create your first library that will be used in all future C projects.',
      details: [
        'C programming fundamentals and syntax mastery',
        'Static vs dynamic memory allocation understanding',
        'Prepare library for later projects like ft_printf and GNL'
      ],
      difficulty: 'Easy',
      duration: '2-3 weeks',
      keyConcepts: ['Memory Allocation', 'String Manipulation', 'Linked Lists', 'Makefile', 'Header Files'],
      challenges: [
        'Memory leaks in linked list operations',
        'Handling edge cases in string functions',
        'Makefile dependency management',
        'Understanding function pointers for bonus part'
      ],
      tips: [
        'Start with string functions then move to memory functions',
        'Test extensively with valgrind from day one',
        'Create comprehensive testers for all functions',
        'Implement bonus linked list functions for extra practice'
      ],
      projectType: 'solo'
    },
    {
      name: 'born2beroot',
      milestone: 'Milestone 1',
      overview: 'Set up a secure Linux virtual machine using Debian or CentOS. Learn system administration fundamentals, user management, partition schemes, and basic server hardening techniques. This project introduces you to the Linux environment you\'ll use throughout the curriculum.',
      details: [
        'Master SSH configuration and key-based authentication',
        'Understand UFW firewall and Sudo security policies',
        'Learn Linux hardening and monitoring basics'
      ],
      difficulty: 'Easy',
      duration: '1-2 weeks',
      keyConcepts: ['Virtualization', 'Linux Administration', 'SSH', 'UFW', 'Sudo', 'Partitioning'],
      challenges: [
        'Understanding LVM partitioning scheme',
        'Configuring strict sudo policies correctly',
        'SSH key authentication setup issues',
        'Password policy implementation'
      ],
      tips: [
        'Use Debian for simpler setup as beginner',
        'Take snapshots before major configuration changes',
        'Document every step for the defense',
        'Test all services before submission'
      ],
      projectType: 'solo'
    },
    {
      name: 'ft_printf',
      milestone: 'Milestone 1',
      overview: 'Recreate the printf function from scratch. Master variadic functions, formatted output processing, and complex string manipulation. This project teaches you how to handle variable arguments and build robust output formatting systems.',
      details: [
        'Implement all major conversions: %d, %s, %x, %p, etc.',
        'Master variadic functions (va_list, va_start, va_arg)',
        'Understand formatted output internals and edge cases'
      ],
      difficulty: 'Medium',
      duration: '3-4 weeks',
      keyConcepts: ['Variadic Functions', 'String Formatting', 'Type Conversion', 'Buffer Management', 'Edge Cases'],
      challenges: [
        'Handling multiple data types correctly',
        'Memory management with variable output sizes',
        'Precision and width specifiers combination',
        'Integer overflow and special cases'
      ],
      tips: [
        'Start with simple conversions (c, s, %) first',
        'Create visual tester to compare with real printf',
        'Handle edge cases before main functionality',
        'Use helper functions for number conversions'
      ],
      projectType: 'solo'
    },
    {
      name: 'get_next_line',
      milestone: 'Milestone 1',
      overview: 'Implement a function that reads a line from a file descriptor. Learn advanced buffer management, static variables, and efficient file I/O operations. This project introduces you to system calls and persistent state management.',
      details: [
        'Handle multiple file descriptors simultaneously',
        'Master read() system call and buffer size optimization',
        'Manage memory efficiently to avoid leaks across calls'
      ],
      difficulty: 'Medium',
      duration: '2-3 weeks',
      keyConcepts: ['File I/O', 'Buffer Management', 'Static Variables', 'System Calls', 'Memory Management'],
      challenges: [
        'Managing multiple file descriptors without mixing data',
        'Buffer size optimization and performance',
        'Memory leaks in edge cases (empty files, very long lines)',
        'Handling read errors and EOF correctly'
      ],
      tips: [
        'Start with single FD then extend to multiple',
        'Test with different BUFFER_SIZE values',
        'Use diagrams to understand buffer state machine',
        'Create comprehensive tests for edge cases'
      ],
      projectType: 'solo'
    },
    {
      name: 'FdF',
      milestone: 'Milestone 2',
      overview: 'Create a 3D wireframe viewer for landscape maps. Learn basic computer graphics, matrix transformations, and the MiniLibX library. This project introduces you to 3D visualization and graphical programming.',
      details: [
        'Understand isometric projection and 3D transformations',
        'Learn MiniLibX basics for window and event management',
        'Implement line drawing algorithms (Bresenham)'
      ],
      difficulty: 'Medium',
      duration: '3-4 weeks',
      keyConcepts: ['Computer Graphics', 'Matrix Transformations', 'Line Drawing', 'MiniLibX', '3D Projection'],
      challenges: [
        'Understanding isometric projection mathematics',
        'Efficient line drawing algorithm implementation',
        'Color gradients and altitude representation',
        'Window management and event handling'
      ],
      tips: [
        'Start with 2D projection before moving to 3D',
        'Implement Bresenham line algorithm first',
        'Use simple test maps for initial development',
        'Add rotation and zoom features for bonus'
      ],
      projectType: 'solo'
    },
    {
      name: 'pipex',
      milestone: 'Milestone 2',
      overview: 'Recreate shell pipe behavior programmatically. Learn process forking, pipe creation, file descriptor manipulation, and command execution. This project is essential preparation for minishell.',
      details: [
        'Master process creation and management with fork()',
        'Understand pipe() system call and file descriptor redirection',
        'Learn command execution with execve() and path resolution'
      ],
      difficulty: 'Medium',
      duration: '3-4 weeks',
      keyConcepts: ['Process Management', 'Pipes', 'File Descriptors', 'Fork', 'Execve', 'Redirection'],
      challenges: [
        'Proper file descriptor management and closing',
        'Handling multiple processes synchronization',
        'Path resolution and command not found errors',
        'Memory cleanup in child processes'
      ],
      tips: [
        'Draw diagrams of file descriptor flows',
        'Test with simple commands first (ls, grep, wc)',
        'Handle all edge cases for file permissions',
        'Implement bonus for multiple pipes'
      ],
      projectType: 'solo'
    },
    {
      name: 'push_swap',
      milestone: 'Milestone 2',
      overview: 'Sort data using two stacks and a limited set of operations. Learn algorithm optimization, complexity analysis, and efficient problem-solving strategies. This project challenges your algorithmic thinking and pushes you to find optimal solutions.',
      details: [
        'Implement stack operations and state management',
        'Design sorting algorithms for minimal moves',
        'Handle large inputs efficiently with optimized approaches'
      ],
      difficulty: 'Hard',
      duration: '4-6 weeks',
      keyConcepts: ['Sorting Algorithms', 'Stack Operations', 'Complexity Analysis', 'Algorithm Optimization', 'State Management'],
      challenges: [
        'Achieving minimum operations for large input sets',
        'Choosing between multiple algorithm approaches',
        'Handling already sorted or reverse sorted inputs',
        'Memory management with large datasets'
      ],
      tips: [
        'Start with simple sort then optimize progressively',
        'Study existing sorting algorithms adaptation',
        'Use visualization tools to debug your algorithm',
        'Focus on 100 numbers first then scale to 500'
      ],
      projectType: 'solo'
    },
    {
      name: 'Philosophers',
      milestone: 'Milestone 3',
      overview: 'Solve the dining philosophers problem using threads and mutexes. Learn concurrent programming, synchronization, deadlock prevention, and resource sharing between multiple threads.',
      details: [
        'Understand thread creation and management with pthreads',
        'Master mutex synchronization and deadlock avoidance',
        'Learn timing and simulation of concurrent processes'
      ],
      difficulty: 'Hard',
      duration: '4-5 weeks',
      keyConcepts: ['Multithreading', 'Mutex', 'Deadlock', 'Synchronization', 'Concurrent Programming'],
      challenges: [
        'Preventing deadlocks with resource ordering',
        'Data races and proper mutex protection',
        'Precise timing and philosopher state management',
        'Handling philosopher death conditions'
      ],
      tips: [
        'Start with single philosopher case',
        'Use mutex for each fork, not global',
        'Implement careful timing with usleep',
        'Test extensively with different parameters'
      ],
      projectType: 'solo'
    },
    {
      name: 'minishell',
      milestone: 'Milestone 3',
      overview: 'Recreate a basic UNIX shell with command parsing, pipes, redirections, and built-in commands. This massive project integrates everything you\'ve learned about processes, file descriptors, and system programming.',
      details: [
        'Process control, forking, and signal handling',
        'Implement redirections and complex pipelines',
        'Shell parsing, environment variables, and built-ins'
      ],
      difficulty: 'Very Hard',
      duration: '6-8 weeks',
      keyConcepts: ['Process Management', 'Signal Handling', 'Parser Design', 'File Descriptors', 'Command Execution'],
      challenges: [
        'Managing complex pipe chains correctly',
        'Signal handling in interactive mode (Ctrl+C, Ctrl+\\, Ctrl+D)',
        'Memory management with recursive parsing',
        'Handling syntax errors and edge cases'
      ],
      tips: [
        'Work in pairs if possible (authorized collaboration)',
        'Build incrementally: parser -> executor -> builtins -> signals',
        'Use flowchart diagrams for complex execution paths',
        'Test extensively with bash comparison'
      ],
      projectType: 'duo'
    },
    {
      name: 'cub3D',
      milestone: 'Milestone 4',
      overview: 'Build a simple 3D raycasting engine inspired by Wolfenstein 3D. Learn computer graphics fundamentals, mathematical transformations, and real-time rendering techniques using the MiniLibX graphics library.',
      details: [
        'MiniLibX graphics programming and event handling',
        'Raycasting mathematics and collision detection',
        'Texture mapping, sprite rendering, and movement systems'
      ],
      difficulty: 'Hard',
      duration: '5-7 weeks',
      keyConcepts: ['Raycasting', 'Computer Graphics', 'Vector Math', 'Event Handling', 'Texture Mapping'],
      challenges: [
        'Understanding raycasting mathematics',
        'Texture rendering without distortion',
        'Performance optimization for smooth rendering',
        'Collision detection and movement physics'
      ],
      tips: [
        'Study the original Wolfenstein 3D raycasting technique',
        'Start with untextured walls then add textures',
        'Use the minimap for debugging rendering issues',
        'Implement movement before complex features'
      ],
      projectType: 'duo'
    },
    {
      name: 'NetPractice',
      milestone: 'Milestone 4',
      overview: 'Learn TCP/IP networking fundamentals through practical exercises. Configure networks, subnets, routers, and understand how internet communication works at the packet level.',
      details: [
        'Understand IP addressing and subnet masks',
        'Learn routing tables and network configuration',
        'Master TCP/IP stack and network layers'
      ],
      difficulty: 'Easy',
      duration: '1-2 weeks',
      keyConcepts: ['TCP/IP', 'Subnetting', 'Routing', 'Network Configuration', 'IP Addressing'],
      challenges: [
        'Understanding CIDR notation and subnet calculations',
        'Configuring proper routing between multiple networks',
        'Handling private vs public IP address spaces'
      ],
      tips: [
        'Use subnet calculators for verification',
        'Draw network diagrams for complex setups',
        'Start with small networks and scale up',
        'Practice binary to decimal conversion for IPs'
      ],
      projectType: 'solo'
    },
    {
      name: 'CPP00',
      milestone: 'Milestone 4',
      overview: 'Introduction to C++ and object-oriented programming. Learn the basics of C++ syntax, classes, member functions, and the standard library compared to C.',
      details: [
        'C++ syntax basics and differences from C',
        'Class declaration and member functions',
        'Introduction to C++ standard library'
      ],
      difficulty: 'Easy',
      duration: '1-2 weeks',
      keyConcepts: ['C++ Basics', 'Classes', 'Member Functions', 'Namespace', 'I/O Streams'],
      challenges: [
        'Transitioning from C to C++ mindset',
        'Understanding namespaces and std:: usage',
        'Class vs struct differences in C++'
      ],
      tips: [
        'Read the C++ reference documentation',
        'Practice with simple class designs first',
        'Understand the difference between .hpp and .cpp files',
        'Use std::cout instead of printf'
      ],
      projectType: 'solo'
    },
    {
      name: 'CPP01',
      milestone: 'Milestone 4',
      overview: 'Dive deeper into C++ memory management, references, and pointers. Learn stack vs heap allocation in C++ and introduction to operator overloading.',
      details: [
        'Memory allocation in C++ (new/delete vs malloc/free)',
        'References vs pointers understanding',
        'Basic operator overloading concepts'
      ],
      difficulty: 'Easy',
      duration: '1-2 weeks',
      keyConcepts: ['Memory Management', 'References', 'Pointers', 'Operator Overloading', 'Stack vs Heap'],
      challenges: [
        'Understanding reference vs pointer semantics',
        'Proper use of new/delete operators',
        'Basic operator overloading syntax'
      ],
      tips: [
        'Prefer references over pointers when possible',
        'Always match new with delete',
        'Start with simple operator overloading (=, +)',
        'Use const correctness from beginning'
      ],
      projectType: 'solo'
    },
    {
      name: 'CPP02',
      milestone: 'Milestone 4',
      overview: 'Explore ad-hoc polymorphism, orthodox canonical class form, and advanced operator overloading. Learn about fixed-point numbers and deeper OOP concepts.',
      details: [
        'Ad-hoc polymorphism and function overloading',
        'Orthodox canonical class form (Big Four)',
        'Fixed-point number implementation'
      ],
      difficulty: 'Medium',
      duration: '2-3 weeks',
      keyConcepts: ['Polymorphism', 'Canonical Form', 'Operator Overloading', 'Fixed-Point', 'OOP Principles'],
      challenges: [
        'Implementing orthodox canonical form correctly',
        'Fixed-point arithmetic precision handling',
        'Complex operator overloading scenarios'
      ],
      tips: [
        'Master the rule of three (now five) early',
        'Test fixed-point arithmetic thoroughly',
        'Practice with complex number examples',
        'Understand deep vs shallow copy'
      ],
      projectType: 'solo'
    },
    {
      name: 'CPP03',
      milestone: 'Milestone 4',
      overview: 'Introduction to inheritance in C++. Learn about base classes, derived classes, and the principles of object-oriented design and code reuse.',
      details: [
        'Inheritance and class hierarchies',
        'Access specifiers (public, protected, private)',
        'Diamond problem and virtual inheritance'
      ],
      difficulty: 'Medium',
      duration: '2-3 weeks',
      keyConcepts: ['Inheritance', 'Polymorphism', 'Virtual Functions', 'Access Control', 'Class Hierarchy'],
      challenges: [
        'Understanding access specifiers in inheritance',
        'Virtual function mechanism and vtable',
        'Diamond problem resolution'
      ],
      tips: [
        'Start with simple inheritance hierarchies',
        'Use virtual destructors in base classes',
        'Understand the "is-a" relationship',
        'Practice with real-world object modeling'
      ],
      projectType: 'solo'
    },
    {
      name: 'CPP04',
      milestone: 'Milestone 4',
      overview: 'Deep dive into subtype polymorphism, abstract classes, and interfaces. Learn about pure virtual functions and the non-instantiability of abstract base classes.',
      details: [
        'Subtype polymorphism and dynamic binding',
        'Abstract classes and pure virtual functions',
        'Interface design and implementation'
      ],
      difficulty: 'Medium',
      duration: '2-3 weeks',
      keyConcepts: ['Abstract Classes', 'Interfaces', 'Dynamic Polymorphism', 'Virtual Functions', 'Design Patterns'],
      challenges: [
        'Understanding runtime polymorphism mechanisms',
        'Designing good abstract class interfaces',
        'Memory management with polymorphic objects'
      ],
      tips: [
        'Design interfaces before implementations',
        'Use smart pointers for polymorphic objects',
        'Study common design patterns',
        'Practice with animal/mammal hierarchy examples'
      ],
      projectType: 'solo'
    },
    {
      name: 'CPP05',
      milestone: 'Milestone 5',
      overview: 'Learn about exceptions in C++ and explore repetition and automation through advanced template programming and generic algorithms.',
      details: [
        'Exception handling with try/catch/throw',
        'Template functions and classes',
        'Standard Template Library (STL) basics'
      ],
      difficulty: 'Hard',
      duration: '3-4 weeks',
      keyConcepts: ['Exception Handling', 'Templates', 'STL', 'Generic Programming', 'RAII'],
      challenges: [
        'Exception safety and resource management',
        'Template syntax and compilation errors',
        'Understanding STL container internals'
      ],
      tips: [
        'Master RAII for exception safety',
        'Start with function templates then class templates',
        'Use STL algorithms instead of manual loops',
        'Understand template instantiation process'
      ],
      projectType: 'solo'
    },
    {
      name: 'CPP06',
      milestone: 'Milestone 5',
      overview: 'Explore C++ casts and type conversion operators. Learn about the different casting operators and when to use each type safely.',
      details: [
        'C++ cast operators (static_cast, dynamic_cast, etc.)',
        'Type conversion operators and constructors',
        'Runtime type identification (RTTI)'
      ],
      difficulty: 'Medium',
      duration: '2-3 weeks',
      keyConcepts: ['Type Casting', 'Conversion Operators', 'RTTI', 'Type Safety', 'C++ Casts'],
      challenges: [
        'Choosing the right cast for each situation',
        'Avoiding slicing in derived-to-base conversions',
        'Understanding dynamic_cast limitations'
      ],
      tips: [
        'Avoid C-style casts completely',
        'Use dynamic_cast for safe downcasting',
        'Understand when implicit conversions happen',
        'Practice with inheritance hierarchies'
      ],
      projectType: 'solo'
    },
    {
      name: 'CPP07',
      milestone: 'Milestone 5',
      overview: 'Deep dive into C++ templates, including template specialization, partial specialization, and template meta-programming basics.',
      details: [
        'Template specialization and partial specialization',
        'Template meta-programming techniques',
        'SFINAE and advanced template patterns'
      ],
      difficulty: 'Hard',
      duration: '3-4 weeks',
      keyConcepts: ['Template Specialization', 'Meta-programming', 'SFINAE', 'Traits', 'Template Patterns'],
      challenges: [
        'Understanding template instantiation rules',
        'Partial specialization syntax',
        'Template meta-programming compilation'
      ],
      tips: [
        'Start with full specialization then partial',
        'Use type traits for conditional compilation',
        'Study STL implementation patterns',
        'Practice with container adapters'
      ],
      projectType: 'solo'
    },
    {
      name: 'CPP08',
      milestone: 'Milestone 5',
      overview: 'Explore templated containers, iterators, and algorithms. Build your own STL-like containers and understand the iterator design pattern.',
      details: [
        'Templated container implementation',
        'Iterator design and implementation',
        'Algorithm templates and function objects'
      ],
      difficulty: 'Very Hard',
      duration: '4-5 weeks',
      keyConcepts: ['Containers', 'Iterators', 'Algorithms', 'Function Objects', 'STL Design'],
      challenges: [
        'Iterator category implementations',
        'Template code organization',
        'Exception safety in containers',
        'Performance optimization'
      ],
      tips: [
        'Study STL source code for inspiration',
        'Implement one container at a time',
        'Test with different data types',
        'Focus on iterator validity guarantees'
      ],
      projectType: 'solo'
    },
    {
      name: 'CPP09',
      milestone: 'Milestone 5',
      overview: 'Explore the STL containers in depth and learn about the C++ standard library\'s architecture, including allocators and advanced memory management.',
      details: [
        'STL container internals and performance characteristics',
        'Custom allocators and memory management',
        'Advanced STL algorithms and adapters'
      ],
      difficulty: 'Hard',
      duration: '3-4 weeks',
      keyConcepts: ['STL Containers', 'Allocators', 'Memory Management', 'Container Adapters', 'STL Algorithms'],
      challenges: [
        'Understanding container performance trade-offs',
        'Custom allocator implementation',
        'Templated adapter patterns'
      ],
      tips: [
        'Benchmark different containers for same task',
        'Study allocator-aware container design',
        'Practice with advanced STL algorithms',
        'Understand move semantics in containers'
      ],
      projectType: 'solo'
    },
    {
      name: 'Inception',
      milestone: 'Milestone 5',
      overview: 'Deploy a multi-container application using Docker Compose. Learn containerization, service orchestration, and infrastructure management with WordPress, Nginx, and MariaDB services.',
      details: [
        'Multi-container Docker deployment strategies',
        'Docker volumes, networks, and security best practices',
        'Container orchestration and service discovery'
      ],
      difficulty: 'Medium',
      duration: '3-4 weeks',
      keyConcepts: ['Docker', 'Containerization', 'Networking', 'Volumes', 'Orchestration'],
      challenges: [
        'Understanding Docker networking between containers',
        'Persistent data storage with volumes',
        'SSL certificate configuration and renewal',
        'Container security and resource limits'
      ],
      tips: [
        'Read Docker documentation thoroughly',
        'Build services incrementally one by one',
        'Use docker-compose for easier management',
        'Test connectivity between all services'
      ],
      projectType: 'solo'
    },
    {
      name: 'webserv',
      milestone: 'Milestone 6',
      overview: 'Build a custom HTTP server in C++ from scratch. Learn HTTP protocol, socket programming, request parsing, and server architecture design.',
      details: [
        'HTTP/1.1 protocol implementation',
        'Socket programming and I/O multiplexing',
        'Server configuration and virtual hosts',
        'CGI integration and dynamic content'
      ],
      difficulty: 'Very Hard',
      duration: '6-8 weeks',
      keyConcepts: ['HTTP Protocol', 'Socket Programming', 'I/O Multiplexing', 'Server Architecture', 'CGI'],
      challenges: [
        'HTTP protocol compliance and edge cases',
        'Efficient I/O handling with multiple connections',
        'Request parsing and validation',
        'CGI integration and process management'
      ],
      tips: [
        'Start with basic TCP server then add HTTP',
        'Use select/poll/epoll for I/O multiplexing',
        'Test with various HTTP clients and tools',
        'Implement configuration file parsing early'
      ],
      projectType: 'solo'
    },
    {
      name: 'ft_transcendence',
      milestone: 'Milestone 6',
      overview: 'Full-stack web application featuring real-time Pong gameplay, chat system, and user authentication. This capstone project integrates frontend (React/TypeScript), backend (NestJS), database (PostgreSQL), and real-time communication (WebSockets).',
      details: [
        'Full-stack development with modern technologies',
        'Real-time gameplay and chat with WebSockets',
        'Advanced authentication (2FA, OAuth) and user management'
      ],
      difficulty: 'Very Hard',
      duration: '8-12 weeks',
      keyConcepts: ['Full-Stack Development', 'WebSockets', 'OAuth', 'Database Design', 'Real-time Applications'],
      challenges: [
        'Real-time game synchronization between players',
        'OAuth integration and session management',
        'Database design for complex relationships',
        'Project management in a team setting'
      ],
      tips: [
        'Choose your team carefully with complementary skills',
        'Plan database schema and API design thoroughly first',
        'Implement core gameplay before additional features',
        'Use project management tools and regular meetings'
      ],
      projectType: 'team'
    }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = 
        searchTerm === '' ||
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.milestone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.keyConcepts.some(concept => concept.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.difficulty.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDifficulty = 
        selectedDifficulty === 'all' || 
        project.difficulty === selectedDifficulty;
      
      const matchesType = 
        selectedType === 'all' || 
        project.projectType === selectedType;
      
      const matchesMilestone = 
        selectedMilestone === 'all' || 
        project.milestone === selectedMilestone;

      return matchesSearch && matchesDifficulty && matchesType && matchesMilestone;
    });
  }, [searchTerm, selectedDifficulty, selectedType, selectedMilestone]);

  const searchResultsCount = filteredProjects.length;
  const totalProjects = projects.length;

  return (
    <>
      <Head>
        <title>42 Holy Graph – Complete Project Overview</title>
        <meta name="description" content="Comprehensive guide to 42 School projects with detailed information about each milestone" />
      </Head>
      <main style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
        backgroundColor: '#0e0e0e', 
        color: '#f0f0f0', 
        padding: '2rem',
        minHeight: '100vh'
      }}>
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '2.8rem', 
            background: 'linear-gradient(45deg, #4ea1ff, #ff6b6b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            42 Holy Graph
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
            Complete guide to 42 School curriculum. Click each project to view detailed overview, challenges, and pro tips for success.
          </p>
        </header>

        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto 2rem auto',
          padding: '1.5rem',
          backgroundColor: '#1b1b1b',
          borderRadius: '10px',
          border: '1px solid #333'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <input 
              type="text"
              placeholder="🔍 Search projects by name, milestone, concepts, or difficulty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                fontSize: '1rem',
                backgroundColor: '#2a2a2a',
                border: '1px solid #444',
                borderRadius: '8px',
                color: '#f0f0f0',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#4ea1ff'}
              onBlur={(e) => e.target.style.borderColor = '#444'}
            />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>
                Difficulty:
              </label>
              <select 
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem',
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  color: '#f0f0f0',
                  outline: 'none'
                }}
              >
                <option value="all">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                <option value="Very Hard">Very Hard</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>
                Project Type:
              </label>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem',
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  color: '#f0f0f0',
                  outline: 'none'
                }}
              >
                <option value="all">All Types</option>
                <option value="solo">Solo</option>
                <option value="duo">Duo</option>
                <option value="team">Team</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>
                Milestone:
              </label>
              <select 
                value={selectedMilestone}
                onChange={(e) => setSelectedMilestone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem',
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  color: '#f0f0f0',
                  outline: 'none'
                }}
              >
                <option value="all">All Milestones</option>
                <option value="Milestone 0">Milestone 0</option>
                <option value="Milestone 1">Milestone 1</option>
                <option value="Milestone 2">Milestone 2</option>
                <option value="Milestone 3">Milestone 3</option>
                <option value="Milestone 4">Milestone 4</option>
                <option value="Milestone 5">Milestone 5</option>
                <option value="Milestone 6">Milestone 6</option>
              </select>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            fontSize: '0.9rem',
            color: '#ccc'
          }}>
            <span>
              Showing {searchResultsCount} of {totalProjects} projects
            </span>
            {(searchTerm || selectedDifficulty !== 'all' || selectedType !== 'all' || selectedMilestone !== 'all') && (
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDifficulty('all');
                  setSelectedType('all');
                  setSelectedMilestone('all');
                }}
                style={{
                  padding: '0.4rem 0.8rem',
                  backgroundColor: '#444',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#f0f0f0',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Projects Section */}
        <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <Accordion 
                key={proj.name}
                title={`${proj.milestone} — ${proj.name}`}
                overview={proj.overview}
                details={proj.details}
                difficulty={proj.difficulty}
                duration={proj.duration}
                keyConcepts={proj.keyConcepts}
                challenges={proj.challenges}
                tips={proj.tips}
                projectType={proj.projectType}
              />
            ))
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem', 
              color: '#ccc',
              backgroundColor: '#1b1b1b',
              borderRadius: '10px',
              border: '1px solid #333'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#ff6b6b' }}>No projects found</h3>
              <p>Try adjusting your search terms or filters to find what you're looking for.</p>
            </div>
          )}
        </section>

        <footer style={{ 
          marginTop: '4rem', 
          textAlign: 'center', 
          color: '#666', 
          fontSize: '0.9rem',
          paddingTop: '2rem',
          borderTop: '1px solid #333'
        }}>
          <p>Built for 42 students — Complete Next.js Edition with Enhanced Details</p>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              Difficulty Legend: 
              <span style={{ color: '#2e7d32', margin: '0 0.5rem' }}>Easy</span>
              <span style={{ color: '#f57c00', margin: '0 0.5rem' }}>Medium</span>
              <span style={{ color: '#c62828', margin: '0 0.5rem' }}>Hard</span>
              <span style={{ color: '#6a1b9a', margin: '0 0.5rem' }}>Very Hard</span>
            </p>
            <p>
              Project Type: 
              <span style={{ color: '#1565c0', margin: '0 0.5rem' }}>👤 Solo</span>
              <span style={{ color: '#c2185b', margin: '0 0.5rem' }}>👥 Duo</span>
              <span style={{ color: '#7b1fa2', margin: '0 0.5rem' }}>👨‍👩‍👧‍👦 Team</span>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}