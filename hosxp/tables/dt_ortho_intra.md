# `dt_ortho_intra`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_ortho_intra_id | int(11) | NO | PRI | 0 |  |  |
| dt_ortho_intra_hygine_id | int(11) | YES |  | NULL |  |  |
| dt_ortho_intra_caries_note | text | YES |  | NULL |  |  |
| dt_ortho_intra_caries_chk | char(1) | YES |  | NULL |  |  |
| dt_ortho_intra_health_id | int(11) | YES |  | NULL |  |  |
| dt_ortho_intra_health_note | text | YES |  | NULL |  |  |
| dt_ortho_intra_frenum_id | int(11) | YES |  | NULL |  |  |
| dt_ortho_intra_missing_chk | char(1) | YES |  | NULL |  |  |
| dt_ortho_intra_missing_note | varchar(255) | YES |  | NULL |  |  |
| dt_ortho_intra_molar_note | text | YES |  | NULL |  |  |
| dt_ortho_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_ortho_intra_frenum_sub | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_intra_frenum_uchk | char(1) | YES |  | NULL |  |  |
| dt_ortho_intra_frenum_lchk | char(1) | YES |  | NULL |  |  |
| dt_ortho_intra_frenum_upper | varchar(100) | YES |  | NULL |  |  |
| dt_ortho_intra_frenum_lower | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_ortho_main9 | dt_ortho_main_id | no | 1 |
| PRIMARY | dt_ortho_intra_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
