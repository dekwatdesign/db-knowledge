# `dt_pedia_finding`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_finding_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_finding_fracture | varchar(255) | YES |  | NULL |  |  |
| dt_pedia_finding_softtissue | text | YES |  | NULL |  |  |
| dt_pedia_finding_bone | text | YES |  | NULL |  |  |
| dt_pedia_finding_splinting | text | YES |  | NULL |  |  |
| dt_pedia_finding_txsofttissue | text | YES |  | NULL |  |  |
| dt_pedia_finding_pulp | text | YES |  | NULL |  |  |
| dt_pedia_finding_restoration | text | YES |  | NULL |  |  |
| dt_pedia_finding_medical | text | YES |  | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_main105 | dt_pedia_main_id | no | 1 |
| PRIMARY | dt_pedia_finding_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
