start
  = statement

statement
  = variable:identifier _ "=" _ expression:expression { return { type: 'assignment', value: expression }; } / expression

expression
  = left:term _ "+" _ right:term { return left + right; }
  / term

term
  = integer
  / identifier

integer
  = digits:[0-9]+ { return parseInt(digits.join(""), 10); }

identifier "identificador"
  = name:[a-zA-Z_][a-zA-Z0-9_]* { return name }

_ 
  = [ \t\r\n]*