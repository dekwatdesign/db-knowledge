# `ipd_pdf_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_pdf_print_id | int(11) | NO | PRI | 0 |  |  |
| reportname | varchar(200) | YES | UNI | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| ipd_pdf_type_id | int(11) | YES |  | NULL |  |  |
| run_script | char(1) | YES |  | NULL |  |  |
| xe_app_script_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_reportname | reportname | yes | 1 |
| PRIMARY | ipd_pdf_print_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
