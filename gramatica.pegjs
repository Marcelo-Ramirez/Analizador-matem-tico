start
  = statements:statement+ { return statements; }

statement
  = identifier:identifier _ "=" _ expression:expression _ { return { type: 'assignment', identifier, expression }; }

expression
  = left:term _ "+" _ right:expression { return { type: 'operation', operator: '+', left, right }; }
  / left:term _ "-" _ right:expression { return { type: 'operation', operator: '-', left, right }; }
  / term

term
  = left:factor _ "*" _ right:term { return { type: 'operation', operator: '*', left, right }; }
  / left:factor _ "/" _ right:term { return { type: 'operation', operator: '/', left, right }; }
  / factor

factor
  = integer
  / variable:identifier { return { type: 'variable', name: variable }; }
  / "(" _ expression:expression _ ")" { return expression; }

integer
  = digits:[0-9]+ { return { type: 'number', value: parseInt(digits.join(""), 10) }; }

identifier
  = name:[a-zA-Z_][a-zA-Z0-9_]* { return name; }

_ "whitespace"
  = [ \t\r\n]*