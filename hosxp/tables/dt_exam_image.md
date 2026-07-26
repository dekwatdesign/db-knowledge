# `dt_exam_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_exam_image_id | int(11) | NO | PRI | 0 |  |  |
| image | longblob | YES |  | NULL |  |  |
| doc | longblob | YES |  | NULL |  |  |
| dt_depcode_code | varchar(2) | YES |  | NULL |  |  |
| dt_main_id | int(11) | YES |  | NULL |  |  |
| dt_exam_image_type | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_exam_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
