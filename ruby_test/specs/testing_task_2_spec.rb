require('Minitest/autorun')
require('Minitest/rg')

require_relative('../testing_task_2.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

def setup()

  @cardgame = CardGame.new()

@card1 = Card.new("Diamonds", 1)


@card2 = Card.new("Spades", 5)

end

def test_checkforace()
assert_equal(true, @cardgame.checkforace(@card1))
assert_equal(false, @cardgame.checkforace(@card2))
end
#
def test_highest_card()

  assert_equal(@card2, @cardgame.highest_card(@card1, @card2))

end

def test_card_total()
cards = [@card1, @card2]
assert_equal("You have a total of 6", @cardgame.card_total(cards))
end


end
