require 'rails_helper'

RSpec.describe "Quotes", :type => :request do
  describe "GET /quotes" do
    it "works! (now write some real specs)" do
      get quotes_path, format: :json
      expect(response.status).to be(200)
    end
  end
end
