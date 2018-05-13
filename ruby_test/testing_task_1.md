### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

#Should be if card.value == 1 rather than = 1.

  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

# This won't work because there is a syntax error and it says dif instead of def when defining the method. Cards also do not have a name, they only have a suit and a value so should be return card1. There is an extra end. There should be a comma between card1 and card2 when being passed in as arguments.
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end

#total should initially be equal to 0. Return should be outside for loop and total should be in string interpolation.   

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end

#need to end the class here
```
