# `ipt_discharge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| discharge_order_status | char(1) | YES |  | NULL |  |  |
| discharge_order_datetime | datetime | YES |  | NULL |  |  |
| discharge_note | text | YES |  | NULL |  |  |
| confirm_final_summary | char(1) | YES |  | NULL |  |  |
| confirm_audit_summary | char(1) | YES |  | NULL |  |  |
| confirm_coding_summary | char(1) | YES |  | NULL |  |  |
| audit_summary_text | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an_discharge | an | no | 1 |
| ix_an_discharge | discharge_order_status | no | 2 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "570001588",
    "discharge_order_status": null,
    "discharge_order_datetime": null,
    "discharge_note": null,
    "confirm_final_summary": "N",
    "confirm_audit_summary": "N",
    "confirm_coding_summary": null,
    "audit_summary_text": ""
  },
  {
    "an": "570001590",
    "discharge_order_status": null,
    "discharge_order_datetime": null,
    "discharge_note": null,
    "confirm_final_summary": "N",
    "confirm_audit_summary": "N",
    "confirm_coding_summary": null,
    "audit_summary_text": ""
  },
  {
    "an": "570001593",
    "discharge_order_status": null,
    "discharge_order_datetime": null,
    "discharge_note": null,
    "confirm_final_summary": "N",
    "confirm_audit_summary": "N",
    "confirm_coding_summary": null,
    "audit_summary_text": ""
  },
  {
    "an": "570001611",
    "discharge_order_status": null,
    "discharge_order_datetime": null,
    "discharge_note": null,
    "confirm_final_summary": "N",
    "confirm_audit_summary": "N",
    "confirm_coding_summary": null,
    "audit_summary_text": ""
  },
  {
    "an": "570001750",
    "discharge_order_status": null,
    "discharge_order_datetime": null,
    "discharge_note": null,
    "confirm_final_summary": "N",
    "confirm_audit_summary": "N",
    "confirm_coding_summary": null,
    "audit_summary_text": ""
  },
  {
    "an": "570001765",
    "discharge_order_status": null,
    "discharge_order_datetime": null,
    "discharge_note": null,
    "confirm_final_summary": "N",
    "confirm_audit_summary": "N",
    "confirm_coding_summary": null,
    "audit_summary_text": ""
  },
  {
    "an": "570001778",
    "discharge_order_status": null,
    "discharge_order_datetime": null,
    "discharge_note": null,
    "confirm_final_summary": "N",
    "confirm_audit_summary": "N",
    "confirm_coding_summary": null,
    "audit_summary_text": ""
  },
  {
    "an": "570001887",
    "discharge_order_status": null,
    "discharge_order_datetime": null,
    "discharge_note": null,
    "confirm_final_summary": "N",
    "confirm_audit_summary": "N",
    "confirm_coding_summary": null,
    "audit_summary_text": ""
  }
]
```
