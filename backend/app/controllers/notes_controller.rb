class NotesController < ApplicationController

    def index
        render json: Note.all
    end

    def show
        note = Note.find_by(id: params[:id])
        render json: note
    end

    def create
        note = Note.create(note_params)
        render json: note
    end

    def destroy
        note = Note.find_by(id: params[:id])
        note.destroy
        render json: note
    end

    private

        def note_params
            params.require(:note).permit(:title, :content)
        end

end
