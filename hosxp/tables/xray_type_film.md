# `xray_type_film`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_type | int(11) | NO | PRI | 0 |  |  |
| film_id | int(11) | NO | PRI | 0 |  |  |
| film_count | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | xray_type | yes | 1 |
| PRIMARY | film_id | yes | 2 |
| xray_type | xray_type | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
