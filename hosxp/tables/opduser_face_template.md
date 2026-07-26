# `opduser_face_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opduser_face_template_id | int(11) | NO | PRI | 0 |  |  |
| loginname | varchar(100) | YES | MUL | NULL |  |  |
| face_template | blob | YES |  | NULL |  |  |
| computer_name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computer_name | computer_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_loginname | loginname | no | 1 |
| PRIMARY | opduser_face_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
