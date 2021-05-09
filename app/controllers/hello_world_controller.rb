# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @app_props = { name: "Kameron" }
  end
end
