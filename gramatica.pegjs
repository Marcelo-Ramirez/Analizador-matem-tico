{
  const variables = {};
}

start
  = statement+{return variables["print"]}

statement
  = variable:identifier _ "=" _ expression:expression _ {
      variables[variable] = expression;
    } 
    / "print(" _ value: identifier _ ")" {return variables["print"] = value}
    /expression

expression
  = left:term _ "+" _ right:expression { return left + right; }
  / left:term _ "-" _ right:expression { return left - right; }
  / term

term
  = left:factor _ "*" _ right:term { return left * right; }
  / left:factor _ "/" _ right:term { return left / right; }
  / factor

factor
  = integer
  / identifier
  / "(" _ expression:expression _ ")" { return expression; }

integer
  = digits:[0-9]+ { return parseInt(digits.join(""), 10); }

identifier "identificador"
  = name:[a-zA-Z_][a-zA-Z0-9_]* { if(variables[name] == undefined)return name
                                  return variables[name] }

_ 
  = [ \t\r\n]*
