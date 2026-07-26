# `acupunture_visit_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| acupunture_visit_detail_id | int(11) | NO | PRI | 0 |  |  |
| acupunture_visit_id | int(11) | YES |  | NULL |  |  |
| acupunture_left_side | char(1) | YES |  | NULL |  |  |
| acupunture_right_side | char(1) | YES |  | NULL |  |  |
| acupunture_point_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | acupunture_visit_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
