# `sap_po_zfpo`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sap_po_zfpo_id | int(11) | NO | PRI | 0 |  |  |
| zpurid | varchar(20) | YES |  | NULL |  |  |
| loekz | char(1) | YES |  | NULL |  |  |
| pstyp | varchar(1) | YES |  | NULL |  |  |
| knttp | varchar(1) | YES |  | NULL |  |  |
| bsart | varchar(4) | YES |  | NULL |  |  |
| ebeln | varchar(10) | YES |  | NULL |  |  |
| poitem | varchar(5) | YES |  | NULL |  |  |
| bedat | date | YES |  | NULL |  |  |
| matnr | varchar(12) | YES |  | NULL |  |  |
| txz01 | varchar(40) | YES |  | NULL |  |  |
| menge | int(11) | YES |  | NULL |  |  |
| meins | varchar(3) | YES |  | NULL |  |  |
| lmein | varchar(30) | YES |  | NULL |  |  |
| eindt | date | YES |  | NULL |  |  |
| matkl | varchar(9) | YES |  | NULL |  |  |
| wgbez | varchar(20) | YES |  | NULL |  |  |
| sakto | varchar(10) | YES |  | NULL |  |  |
| mcod1 | varchar(25) | YES |  | NULL |  |  |
| ekgrp | varchar(3) | YES |  | NULL |  |  |
| eknam | varchar(18) | YES |  | NULL |  |  |
| lifnr | varchar(10) | YES |  | NULL |  |  |
| name1 | varchar(35) | YES |  | NULL |  |  |
| werks | varchar(4) | YES |  | NULL |  |  |
| lgort | varchar(4) | YES |  | NULL |  |  |
| netpr | double(15,2) | YES |  | NULL |  |  |
| netwr | double(15,2) | YES |  | NULL |  |  |
| aufnr | varchar(12) | YES |  | NULL |  |  |
| phas0 | char(1) | YES |  | NULL |  |  |
| phas1 | char(1) | YES |  | NULL |  |  |
| phas2 | char(1) | YES |  | NULL |  |  |
| phas3 | char(1) | YES |  | NULL |  |  |
| afnam | varchar(12) | YES |  | NULL |  |  |
| aufnr1 | varchar(12) | YES |  | NULL |  |  |
| psppnr | varchar(8) | YES |  | NULL |  |  |
| budat | date | YES |  | NULL |  |  |
| bwart | varchar(3) | YES |  | NULL |  |  |
| umren | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | sap_po_zfpo_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
