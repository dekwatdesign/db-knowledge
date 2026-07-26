# `patient_data_preferences`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_data_preferences_id | int(11) | NO | PRI | 0 |  |  |
| cid | char(13) | YES | UNI | NULL |  |  |
| consent_date | date | YES |  | NULL |  |  |
| consent_ok | char(1) | YES |  | NULL |  |  |
| staff | varchar(30) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| ai_intro_acknowledge | char(1) | YES |  | NULL |  |  |
| ai_intro_acknowledge_datetime | datetime | YES |  | NULL |  |  |
| ai_intro_acknowledge_summarize | varchar(500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | yes | 1 |
| ix_hn | hn | no | 1 |
| PRIMARY | patient_data_preferences_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_data_preferences_id": 1,
    "cid": "1xxxxxxxxxxxx",
    "consent_date": "2013-10-14",
    "consent_ok": "Y",
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2013-10-14 09:16:35",
    "hn": "560001749",
    "ai_intro_acknowledge": null,
    "ai_intro_acknowledge_datetime": null,
    "ai_intro_acknowledge_summarize": null
  },
  {
    "patient_data_preferences_id": 2,
    "cid": "1xxxxxxxxxxxx",
    "consent_date": "2013-10-14",
    "consent_ok": "Y",
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2013-10-14 09:19:47",
    "hn": "530157651",
    "ai_intro_acknowledge": null,
    "ai_intro_acknowledge_datetime": null,
    "ai_intro_acknowledge_summarize": null
  },
  {
    "patient_data_preferences_id": 3,
    "cid": "1xxxxxxxxxxxx",
    "consent_date": "2013-10-14",
    "consent_ok": "Y",
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2013-10-14 09:35:28",
    "hn": "530089649",
    "ai_intro_acknowledge": null,
    "ai_intro_acknowledge_datetime": null,
    "ai_intro_acknowledge_summarize": null
  },
  {
    "patient_data_preferences_id": 4,
    "cid": "1xxxxxxxxxxxx",
    "consent_date": "2013-10-14",
    "consent_ok": "Y",
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2013-10-14 09:54:27",
    "hn": "560001753",
    "ai_intro_acknowledge": null,
    "ai_intro_acknowledge_datetime": null,
    "ai_intro_acknowledge_summarize": null
  },
  {
    "patient_data_preferences_id": 5,
    "cid": "1xxxxxxxxxxxx",
    "consent_date": "2013-10-14",
    "consent_ok": "Y",
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2013-10-14 09:55:08",
    "hn": "530104550",
    "ai_intro_acknowledge": null,
    "ai_intro_acknowledge_datetime": null,
    "ai_intro_acknowledge_summarize": null
  },
  {
    "patient_data_preferences_id": 6,
    "cid": "1xxxxxxxxxxxx",
    "consent_date": "2013-10-14",
    "consent_ok": "Y",
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2013-10-14 09:57:01",
    "hn": "530008250",
    "ai_intro_acknowledge": null,
    "ai_intro_acknowledge_datetime": null,
    "ai_intro_acknowledge_summarize": null
  },
  {
    "patient_data_preferences_id": 7,
    "cid": "1xxxxxxxxxxxx",
    "consent_date": "2013-10-14",
    "consent_ok": "Y",
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2013-10-14 09:59:20",
    "hn": "550001604",
    "ai_intro_acknowledge": null,
    "ai_intro_acknowledge_datetime": null,
    "ai_intro_acknowledge_summarize": null
  },
  {
    "patient_data_preferences_id": 8,
    "cid": "1xxxxxxxxxxxx",
    "consent_date": "2013-10-14",
    "consent_ok": "Y",
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2013-10-14 10:29:11",
    "hn": "560001752",
    "ai_intro_acknowledge": null,
    "ai_intro_acknowledge_datetime": null,
    "ai_intro_acknowledge_summarize": null
  }
]
```
