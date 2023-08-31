class TimersController < ApplicationController
  def index
    @timers = Timer.all
  end

  def create
    @timer = Timer.create!
  end
end
