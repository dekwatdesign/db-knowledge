# `ipd_med_trolley_batch_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_med_trolley_batch_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipd_med_trolley_bed_id | int(11) | YES | MUL | NULL |  |  |
| ipd_med_trolley_batch_id | int(11) | YES |  | NULL |  |  |
| med_detail_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_med_trolley_bed_id | ipd_med_trolley_bed_id | no | 1 |
| PRIMARY | ipd_med_trolley_batch_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
