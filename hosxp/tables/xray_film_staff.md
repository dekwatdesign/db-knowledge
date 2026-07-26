# `xray_film_staff`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_film_staff_id | int(11) | NO | PRI | 0 |  |  |
| xn | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_xn | xn | no | 1 |
| PRIMARY | xray_film_staff_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
