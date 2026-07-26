# `village_nursery_child_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_nursery_child_service_id | int(11) | NO | PRI | 0 |  |  |
| service_date | date | YES |  | NULL |  |  |
| village_nursery_child_id | int(11) | YES |  | NULL |  |  |
| brush_teeth | char(1) | YES |  | NULL |  |  |
| teeth_educate | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_nursery_child_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
