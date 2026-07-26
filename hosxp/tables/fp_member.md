# `fp_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| fp_number | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| child_count | tinyint(4) | YES |  | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| fptype | char(1) | YES |  | NULL |  |  |
| vagina_cancer_check | char(1) | YES |  | NULL |  |  |
| pv_note | text | YES |  | NULL |  |  |
| pv_check | char(1) | YES |  | NULL |  |  |
| cancer_check | char(1) | YES |  | NULL |  |  |
| parity | tinyint(4) | YES |  | NULL |  |  |
| last_child_age | int(11) | YES |  | NULL |  |  |
| advice1 | char(1) | YES |  | NULL |  |  |
| advice2 | char(1) | YES |  | NULL |  |  |
| pv_check_date | date | YES |  | NULL |  |  |
| cancer_check_date | date | YES |  | NULL |  |  |
| pv_pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | fp_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
