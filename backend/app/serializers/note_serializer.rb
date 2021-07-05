class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :positionX, :positionY
end
