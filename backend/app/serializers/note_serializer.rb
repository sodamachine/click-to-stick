class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :status, :positionX, :positionY
end
