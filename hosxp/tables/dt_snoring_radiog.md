# `dt_snoring_radiog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_snoring_radiog_id | int(11) | NO | PRI | 0 |  |  |
| dt_snoring_radiog_cephdate | datetime | YES |  | NULL |  |  |
| dt_snoring_radiog_sk_class | varchar(15) | YES |  | NULL |  |  |
| dt_snoring_radiog_anb_note | varchar(30) | YES |  | NULL |  |  |
| dt_snoring_radiog_sna_note | varchar(30) | YES |  | NULL |  |  |
| dt_snoring_radiog_snb_note | varchar(30) | YES |  | NULL |  |  |
| dt_snoring_radiog_others_note | text | YES |  | NULL |  |  |
| dt_snoring_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_snoring_radiog_result_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_snoring_main13 | dt_snoring_main_id | no | 1 |
| PRIMARY | dt_snoring_radiog_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
