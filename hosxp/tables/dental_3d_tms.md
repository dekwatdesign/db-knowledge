# `dental_3d_tms`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_3d_tms_id | varchar(100) | NO | PRI |  |  |  |
| dental_3d_tms_json | text | YES |  | NULL |  |  |
| dtmain_id | int(11) | YES | MUL | NULL |  |  |
| dental_category_tms_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdental_category_tms341 | dental_category_tms_id | no | 1 |
| ix_Refdtmain321 | dtmain_id | no | 1 |
| PRIMARY | dental_3d_tms_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
