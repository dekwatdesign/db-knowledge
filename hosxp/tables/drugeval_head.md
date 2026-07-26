# `drugeval_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugeval_head_id | int(11) | NO | PRI | 0 |  |  |
| drug_eval_name | varchar(200) | YES | UNI | NULL |  |  |
| chemical_name | varchar(200) | YES |  | NULL |  |  |
| synonym_name | varchar(200) | YES |  | NULL |  |  |
| drug_sign | varchar(200) | YES |  | NULL |  |  |
| drug_color | varchar(100) | YES |  | NULL |  |  |
| drug_shape | varchar(100) | YES |  | NULL |  |  |
| drug_markings | varchar(200) | YES |  | NULL |  |  |
| drug_size | varchar(100) | YES |  | NULL |  |  |
| drug_abbreviation | varchar(200) | YES |  | NULL |  |  |
| prop_bbb | char(1) | YES |  | NULL |  |  |
| prop_no_mill | char(1) | YES |  | NULL |  |  |
| prop_no_brick | char(1) | YES |  | NULL |  |  |
| prop_breast_feeding | char(1) | YES |  | NULL |  |  |
| prop_tdm | char(1) | YES |  | NULL |  |  |
| prop_g6pd | char(1) | YES |  | NULL |  |  |
| prop_narrow_tpi | char(1) | YES |  | NULL |  |  |
| vendor_name | varchar(200) | YES |  | NULL |  |  |
| marketer_name | varchar(200) | YES |  | NULL |  |  |
| manufacturer_name | varchar(200) | YES |  | NULL |  |  |
| trade_name | varchar(200) | YES |  | NULL |  |  |
| trade_name_other | varchar(200) | YES |  | NULL |  |  |
| pregnancy_category | varchar(200) | YES |  | NULL |  |  |
| mims_class_name | varchar(200) | YES |  | NULL |  |  |
| atc_classification | varchar(200) | YES |  | NULL |  |  |
| thai_fda_category | varchar(200) | YES |  | NULL |  |  |
| presentation | varchar(200) | YES |  | NULL |  |  |
| structure_rtf | longblob | YES |  | NULL |  |  |
| structural_formula_rtf | longblob | YES |  | NULL |  |  |
| chemical_formula_rtf | longblob | YES |  | NULL |  |  |
| dosage_form_other | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drug_eval_name | drug_eval_name | yes | 1 |
| PRIMARY | drugeval_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
