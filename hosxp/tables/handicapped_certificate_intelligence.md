# `handicapped_certificate_intelligence`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_certificate_intelligence_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_certificate_intelligence_deformed_type_a | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_style_a | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_style_b | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_birth_a | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_birth_b | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_birth_b_year | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_birth_b_mo | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_cause_a | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_cause_b | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_cause_c | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_cause_d | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_cause_e | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_intelligence_cause_e_text | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_type_id | char(10) | YES |  | NULL |  |  |
| handicapped_status_group | char(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_certificate_intelligence_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
