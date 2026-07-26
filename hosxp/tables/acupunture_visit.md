# `acupunture_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| acupunture_visit_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| doctor | varchar(9) | YES |  | NULL |  |  |
| acupunture_start_datetime | datetime | YES |  | NULL |  |  |
| acupunture_end_datetime | datetime | YES |  | NULL |  |  |
| acupunture_visit_no | int(11) | YES |  | NULL |  |  |
| acupunture_result | longtext | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | acupunture_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
