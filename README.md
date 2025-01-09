deletePaymentById(recId: number) {
  this.isLoading = true; // Set isLoading to true at the start

  this.service.deletePrescriptionPaymentById(this.formId, recId).pipe(
    tap(() => console.log('Delete request successful')), // Log success
    delay(3000), // Introduce a 3-second delay
    tap(() => this.fillPrescriptionPayments()), // Call to refresh payments
    finalize(() => {
      this.isLoading = false; // Set isLoading to false after completion
    })
  ).subscribe({
    error: (err) => {
      console.error('Error deleting payment:', err); // Handle errors if any
    },
  });
}
