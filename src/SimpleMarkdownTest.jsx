var React = require('react')

var SimpleMarkdown = require('simple-markdown')

var SimpleMarkdownTest = React.createClass({
  render: function(){
    var xxRule = {
      order: SimpleMarkdown.defaultRules.em.order - 0.5,
      match: function(source) {
        return /^xx([\s\S]+?)xx(?!x)/.exec(source)
      },
      parse: function(capture, parse, state) {
        return {
            content: parse(capture[1], state)
        }
      },
      react: function(node, output) {
        return <u children={output(node.content)} />
      }
    }

    var rules = Object.assign({}, SimpleMarkdown.defaultRules, {
      xx: xxRule
    })

    var rawBuiltParser = SimpleMarkdown.parserFor(rules)

    var parse = function(source) {
      var blockSource = source + "\n\n"
      return rawBuiltParser(blockSource, {inline: false})
    }

    var output = SimpleMarkdown.outputFor(SimpleMarkdown.ruleOutput(rules, 'react'))

    var inputText = 'xxsome textxx'
    var source = inputText
    var syntaxTree = parse(source)
    return (
      <div>{output(syntaxTree)}</div>
    )
  }
})

module.exports = SimpleMarkdownTest
