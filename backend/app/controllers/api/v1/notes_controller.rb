class Api::V1::NotesController < ApplicationController
  # before_action :find_note
  def index
    @notes = Notes.all
  end
  def show
    @note = Note.find(params[:id])
    render json: @note
  end

  def create
    @note = Note.new(note_params)
    if @note.valid?
      render json: @note, status: :accepted
    else
      render json: @note.errors
      # { errors: @note.errors.full_messages }, status: :unprocessible_entity
    end
  end

  # def delete 
  # end

  private
  def game_params
    params.require(:note).permit(:title, :content, :location)
  end

  def find_note
   @note = Note.find(params[:id])
   # note = Note.find(params[:id, :title, :location])
  end


end
