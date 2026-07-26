# `dt_prevent_non_caries`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prevent_non_caries_id | int(11) | NO | PRI | 0 |  |  |
| dt_prevent_non_caries_lesion | char(3) | YES |  | NULL |  |  |
| dt_prevent_non_caries_les_chk | varchar(20) | YES |  | NULL |  |  |
| dt_prevent_non_caries_ris_chk | varchar(30) | YES |  | NULL |  |  |
| dt_prevent_non_caries_ris_note | text | YES |  | NULL |  |  |
| dt_prevent_non_caries_sumary | char(3) | YES |  | NULL |  |  |
| dt_prevent_non_caries_sum_chk | varchar(20) | YES |  | NULL |  |  |
| dt_prevent_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prevent23 | dt_prevent_id | no | 1 |
| PRIMARY | dt_prevent_non_caries_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
