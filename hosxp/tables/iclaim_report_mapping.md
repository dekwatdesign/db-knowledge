# `iclaim_report_mapping`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_report_mapping_id | int(11) | NO | PRI | 0 |  |  |
| report_bill_summary_price_opd | varchar(250) | YES |  | NULL |  |  |
| report_bill_treatment_opd | varchar(250) | YES |  | NULL |  |  |
| report_consent_form | varchar(250) | YES |  | NULL |  |  |
| scan_type_id | int(11) | YES |  | NULL |  |  |
| report_iclam_consent_form | varchar(250) | YES |  | NULL |  |  |
| report_consent_sc_visble | char(1) | YES |  | NULL |  |  |
| report_bill_summary_price_ipd | varchar(250) | YES |  | NULL |  |  |
| report_bill_treatment_ipd | varchar(250) | YES |  | NULL |  |  |
| report_consent_form_ipd | varchar(250) | YES |  | NULL |  |  |
| scan_type_id_ipd | int(11) | YES |  | NULL |  |  |
| report_iclam_consent_form_ipd | varchar(250) | YES |  | NULL |  |  |
| report_consent_sc_visble_ipd | char(1) | YES |  | NULL |  |  |
| report_invoice_ipd | varchar(250) | YES |  | NULL |  |  |
| report_invoice_detail_ipd | varchar(250) | YES |  | NULL |  |  |
| report_operation_ipd | varchar(250) | YES |  | NULL |  |  |
| report_oper_scan_type_ipd | text | YES |  | NULL |  |  |
| scan_type_id_attach_ipd | int(11) | YES |  | NULL |  |  |
| report_operation_component | varchar(250) | YES |  | NULL |  |  |
| report_xray_ct_scan_opd | varchar(250) | YES |  | NULL |  |  |
| report_xray_ct_scan_ipd | varchar(255) | YES |  | NULL |  |  |
| report_invoice_opd | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | iclaim_report_mapping_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
