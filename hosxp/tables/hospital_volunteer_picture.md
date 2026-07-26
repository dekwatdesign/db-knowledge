# `hospital_volunteer_picture`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_volunteer_picture_id | int(11) | NO | PRI | 0 |  |  |
| hospital_volunteer_id | int(11) | YES | MUL | NULL |  |  |
| hospital_volunteer_picture_blob | longblob | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_volunteer_id | hospital_volunteer_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_volunteer_picture_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
