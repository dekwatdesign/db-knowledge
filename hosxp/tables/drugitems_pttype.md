# `drugitems_pttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_pttype_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| item_note | text | YES |  | NULL |  |  |
| allow_opd | char(1) | YES | MUL | NULL |  |  |
| allow_ipd | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| ix_icode_pttype | icode | yes | 1 |
| ix_icode_pttype | pttype | yes | 2 |
| ix_icode_pttype_allow_ipd | icode | no | 1 |
| ix_icode_pttype_allow_ipd | pttype | no | 2 |
| ix_icode_pttype_allow_ipd | allow_ipd | no | 3 |
| ix_icode_pttype_allow_ipd_index | allow_ipd | no | 1 |
| ix_icode_pttype_allow_ipd_index | icode | no | 2 |
| ix_icode_pttype_allow_ipd_index | pttype | no | 3 |
| ix_icode_pttype_allow_opd | icode | no | 1 |
| ix_icode_pttype_allow_opd | pttype | no | 2 |
| ix_icode_pttype_allow_opd | allow_opd | no | 3 |
| ix_icode_pttype_allow_opd_index | allow_opd | no | 1 |
| ix_icode_pttype_allow_opd_index | icode | no | 2 |
| ix_icode_pttype_allow_opd_index | pttype | no | 3 |
| PRIMARY | drugitems_pttype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
