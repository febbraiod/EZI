class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :role

  has_many :statuses, serializer: UserStatusSerializer
end
