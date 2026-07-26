# `sap_po_zfmat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sap_po_zfmat_id | int(11) | NO | PRI | 0 |  |  |
| matnr | varchar(12) | YES |  | NULL |  |  |
| maktx | varchar(100) | YES |  | NULL |  |  |
| meins | varchar(3) | YES |  | NULL |  |  |
| verpr | double(15,3) | YES |  | NULL |  |  |
| lvorm | char(1) | YES |  | NULL |  |  |
| cdate | date | YES |  | NULL |  |  |
| mtart | varchar(4) | YES |  | NULL |  |  |
| matkl | varchar(9) | YES |  | NULL |  |  |
| werks | varchar(4) | YES |  | NULL |  |  |
| file_monitor_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_file_monotor_id | file_monitor_id | no | 1 |
| PRIMARY | sap_po_zfmat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
