# `dt_prevent_recordpi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prevent_recordpi_id | int(11) | NO | PRI | 0 |  |  |
| dt_prevent_recordpi_average | varchar(30) | YES |  | NULL |  |  |
| dt_prevent_recordpi_quig_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_recordpi_stall_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_recordpi_remark_pi | text | YES |  | NULL |  |  |
| dt_prevent_recordpi_brush_chk | varchar(20) | YES |  | NULL |  |  |
| dt_prevent_recordpi_brush_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_recordpi_oral_chk | varchar(20) | YES |  | NULL |  |  |
| dt_prevent_recordpi_oral_note | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_recordpi_remark | text | YES |  | NULL |  |  |
| dt_prevent_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prevent25 | dt_prevent_id | no | 1 |
| PRIMARY | dt_prevent_recordpi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
