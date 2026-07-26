# `psy_home_visit_pic_home`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_home_visit_pic_home_id | int(11) | NO | PRI | 0 |  |  |
| psy_home_visit_pic_home_pic | longblob | YES |  | NULL |  |  |
| psy_home_visit_id | int(11) | YES |  | NULL |  |  |
| psy_home_visit_pic_home_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_home_visit_pic_home_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
