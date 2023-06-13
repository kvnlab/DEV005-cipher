"use strict"
import cipher from './cipher.js';

/**
 * HTML Elements
 */
const ENCODE_FORM = document.getElementById("encode-form"),
  ENCODE_INPUT = document.getElementById("encode-message"),
  ENCODE_TEXT_RESULT = document.getElementById("encode-output"),
  DECODE_FORM = document.getElementById("decode-form"),
  DECODE_INPUT = document.getElementById("decode-message"),
  DECODE_TEXT_RESULT = document.getElementById("decode-output");

/**
 * Functions
 */

/**
 * send form
 * @param {Event} e
 */
const onFormSubmitEncode = (e) => {
  e.preventDefault();
  ENCODE_TEXT_RESULT.innerText = cipher.encode(33, ENCODE_INPUT.value);
};
const onFormSubmitDecode = (e) => {
  e.preventDefault();
  DECODE_TEXT_RESULT.innerText = cipher.decode(33, DECODE_INPUT.value);
};

/**
 * Events
 */
ENCODE_FORM.addEventListener("submit", onFormSubmitEncode);
DECODE_FORM.addEventListener("submit", onFormSubmitDecode);