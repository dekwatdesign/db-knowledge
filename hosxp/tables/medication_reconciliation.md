# `medication_reconciliation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medication_reconciliation_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | UNI | NULL |  |  |
| medication_survey | char(1) | YES |  | NULL |  |  |
| last_receive_medication_date | date | YES |  | NULL |  |  |
| last_recieve_medication_duration_day | int(11) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| doctor | varchar(25) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| last_receive_date | date | YES |  | NULL |  |  |
| last_receive_duration_day | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | medication_reconciliation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "medication_reconciliation_id": 8,
    "an": "620000835",
    "medication_survey": null,
    "last_receive_medication_date": null,
    "last_recieve_medication_duration_day": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor": "187",
    "note": null,
    "hos_guid": null,
    "last_receive_date": null,
    "last_receive_duration_day": null
  },
  {
    "medication_reconciliation_id": 9,
    "an": "620000853",
    "medication_survey": null,
    "last_receive_medication_date": null,
    "last_recieve_medication_duration_day": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor": "187",
    "note": null,
    "hos_guid": null,
    "last_receive_date": null,
    "last_receive_duration_day": null
  },
  {
    "medication_reconciliation_id": 10,
    "an": "620000927",
    "medication_survey": null,
    "last_receive_medication_date": null,
    "last_recieve_medication_duration_day": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor": "187",
    "note": null,
    "hos_guid": null,
    "last_receive_date": null,
    "last_receive_duration_day": null
  },
  {
    "medication_reconciliation_id": 11,
    "an": "620000686",
    "medication_survey": "N",
    "last_receive_medication_date": null,
    "last_recieve_medication_duration_day": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor": "187",
    "note": null,
    "hos_guid": null,
    "last_receive_date": null,
    "last_receive_duration_day": null
  },
  {
    "medication_reconciliation_id": 12,
    "an": "630000776",
    "medication_survey": null,
    "last_receive_medication_date": null,
    "last_recieve_medication_duration_day": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor": "187",
    "note": null,
    "hos_guid": null,
    "last_receive_date": null,
    "last_receive_duration_day": null
  },
  {
    "medication_reconciliation_id": 16,
    "an": "630001003",
    "medication_survey": null,
    "last_receive_medication_date": null,
    "last_recieve_medication_duration_day": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor": "187",
    "note": null,
    "hos_guid": null,
    "last_receive_date": null,
    "last_receive_duration_day": null
  },
  {
    "medication_reconciliation_id": 17,
    "an": "640000430",
    "medication_survey": null,
    "last_receive_medication_date": null,
    "last_recieve_medication_duration_day": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor": "999",
    "note": null,
    "hos_guid": null,
    "last_receive_date": null,
    "last_receive_duration_day": null
  },
  {
    "medication_reconciliation_id": 19,
    "an": "640000434",
    "medication_survey": null,
    "last_receive_medication_date": null,
    "last_recieve_medication_duration_day": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor": "999",
    "note": null,
    "hos_guid": null,
    "last_receive_date": null,
    "last_receive_duration_day": null
  }
]
```
